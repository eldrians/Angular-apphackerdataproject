export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const storiesUrl = `${baseUrl}/askstories.json`;
export const storyUrl = `${baseUrl}/item/`;

export const showText = (text: string, count: number) => `${text} (${count})`;
