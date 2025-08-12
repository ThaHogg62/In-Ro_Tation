
export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelName: string;
  channelAvatarUrl: string;
  views: string;
  uploadedAt: string;
  duration: string;
  description: string;
  transcript: string;
  subscribers: string;
}

export interface Comment {
  id: string;
  author: string;
  authorAvatarUrl: string;
  text: string;
  timestamp: string;
}
