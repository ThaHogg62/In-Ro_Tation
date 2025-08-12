
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import WatchPage from './components/WatchPage';
import { VideoGridSkeleton } from './components/skeletons';
import { Video } from './types';
import { getVideos } from './services/api';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setIsLoading(true);
      const fetchedVideos = await getVideos();
      setVideos(fetchedVideos);
      setIsLoading(false);
    };
    fetchVideos();
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const handleSelectVideo = useCallback((video: Video) => {
    setSelectedVideo(video);
    window.scrollTo(0, 0);
  }, []);

  const handleGoHome = useCallback(() => {
    setSelectedVideo(null);
    setSearchQuery('');
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setSelectedVideo(null); // Return to grid view to show search results
  }, []);

  const filteredVideos = useMemo(() => {
    if (!searchQuery) {
      return videos;
    }
    return videos.filter(video =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, videos]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header 
        onMenuClick={toggleSidebar} 
        onLogoClick={handleGoHome} 
        onSearch={handleSearch}
        searchQuery={searchQuery}
      />
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        <main className={`flex-1 transition-all duration-300 ease-in-out ${sidebarOpen ? 'ml-64' : 'ml-0 md:ml-20'}`}>
          <div className="p-4 md:p-8">
            {selectedVideo ? (
              <WatchPage 
                video={selectedVideo} 
                allVideos={videos}
                onSelectVideo={handleSelectVideo} 
              />
            ) : isLoading ? (
              <VideoGridSkeleton />
            ) : (
              <VideoGrid videos={filteredVideos} onSelectVideo={handleSelectVideo} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
