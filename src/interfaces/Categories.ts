interface Category {
  name: string;
  id: string;
  sessions: Session[];
}
interface Session {
  name: string;
  id: string;
  desc: string;
  speaker: Speaker;
}
interface Speaker {
  name: string;
  title: string;
  org: string;
  bio: string;
}

export type { Category, Session };
