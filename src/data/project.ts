import kanbanAddTask from "@assets/Kanban-add-task.png";
import kanbanEditTask from "@assets/Kanban-edit-task.png";
import kanban from "@assets/Kanban-home.png";
import kanbanMain from "@assets/Kanban-main-screen.png";
import kanbanManageTags from "@assets/Kanban-manage-tags.png";
import markdownAddFolder from "@assets/markdown-editor-add-folder.png";
import markdownLogin from "@assets/markdown-editor-login.png";
import markdownNoNote from "@assets/markdown-editor-no-note.png";
import markdownNote from "@assets/markdown-editor-note.png";
import natflix from "@assets/natflix.png";
import poll from "@assets/poll.png";
import polls from "@assets/polls.png";
import pollCreate from "@assets/polls2.png";
import pollLogin from "@assets/polls3.png";
import sinta from "@assets/sinta.png";
import sinta1 from "@assets/sinta1.png";
import sinta2 from "@assets/sinta2.png";
import sinta3 from "@assets/sinta3.png";
import sinta4 from "@assets/sinta4.png";
import sinta5 from "@assets/sinta5.png";
import typingLeaderboard from "@assets/typing-leaderboard.png";
import typingMocha from "@assets/typing-mocha.png";
import typingProfile from "@assets/typing-profile.png";
import typingThemes from "@assets/typing-themes.png";
import typing from "@assets/typing.png";

export type PROJECT_NAMES =
  | "sinta"
  | "natflix"
  | "polls-app"
  | "markdown-editor"
  | "kanban-app"
  | "typing-app";

type TBullet = {
  label: string;
  content: {
    type: "text" | "url";
    text: string;
    target?: string;
  };
};

type TImage = {
  src: ImageMetadata;
  alt: string;
};

type TImages = TImage[];

export type TProject = {
  [key in PROJECT_NAMES]: {
    name: string;
    description: string;
    images: TImages[];
    bullets: TBullet[];
    features: string[];
  };
};

export default {
  sinta: {
    name: "Sinta",
    description:
      "A cross-platform mobile app designed for couples to build fun and lasting relationship habits.",
    images: [
      [
        {
          src: sinta,
          alt: "Sinta Website",
        },
      ],
      [
        {
          src: sinta1,
          alt: "Sinta App 1",
        },
        {
          src: sinta2,
          alt: "Sinta App 2",
        },
      ],
      [
        {
          src: sinta3,
          alt: "Sinta App 3",
        },
        {
          src: sinta4,
          alt: "Sinta App 4",
        },
      ],
      [
        {
          src: sinta5,
          alt: "Sinta App 5",
        },
      ],
    ],
    bullets: [
      {
        label: "website",
        content: {
          type: "url",
          text: "https://sinta.app/",
          target: "https://sinta.app/",
        },
      },
      {
        label: "apps",
        content: {
          type: "url",
          text: "https://sinta.app/download",
          target: "https://sinta.app/download",
        },
      },
      {
        label: "platform",
        content: {
          type: "text",
          text: "Android / IOS",
        },
      },
      {
        label: "stack",
        content: {
          type: "text",
          text: "React Native / NextJS / NodeJS / PostgresSQL",
        },
      },
      {
        label: "other",
        content: {
          type: "text",
          text: "AWS / Prisma / Socket.IO / Jotai / React Query / Tailwind",
        },
      },
    ],
    features: [
      "Auth system w/ JWT tokens",
      "Interactive calendar w/ multiple type of activities & events",
      "Interactive map w/ multiple type of activities & events",
      "Media storage using AWS S3",
      "Date Idea & Movie Swipers using web sockets",
      "Date Ideas / Notes / Travels / Lockets creation",
      "Love Actions using expo push notifications",
      "Much more can be found on the app",
    ],
  },
  natflix: {
    name: "Natflix",
    description:
      "A Netflix inspired website implementing machine learning for content suggestions and recommandations. I used open source data to feed the database with views and ratings of thousand of users on various movies, which are used within one of the three implemented machine learning algorithms to fetch the movies liked by users with similar taste.",
    images: [
      [
        {
          src: natflix,
          alt: "Natflix Website",
        },
      ],
    ],
    bullets: [
      {
        label: "browsers",
        content: {
          type: "text",
          text: "Chrome / Firefox / Safari",
        },
      },
      {
        label: "back git",
        content: {
          type: "url",
          text: "github.com",
          target: "https://github.com/antoninpire/Natflix-Back",
        },
      },
      {
        label: "front git",
        content: {
          type: "url",
          text: "github.com",
          target: "https://github.com/antoninpire/Natflix-Front",
        },
      },
      {
        label: "stack",
        content: {
          type: "text",
          text: "React / NodeJS / MySQL / Python / Machine Learning",
        },
      },
    ],
    features: [
      "Auth system w/ JWT tokens",
      "Role system w/ Admin Panel",
      "3 Machine Learning implementations, changeable through preferences",
      "Rating system & view system",
    ],
  },
  "markdown-editor": {
    name: "Markdown Notes Editor",
    description:
      "A notes app that provides to authenticated users a markdown editor so that they can create notes, put them in folders, and edit them in a markdown nicely flavored style.",
    images: [
      [
        {
          alt: "Markdown Note",
          src: markdownNote,
        },
      ],
      [
        {
          alt: "Markdown Create Note",
          src: markdownNoNote,
        },
      ],
      [
        {
          alt: "Markdown Add Folder",
          src: markdownAddFolder,
        },
      ],
      [
        {
          alt: "Markdown Login",
          src: markdownLogin,
        },
      ],
    ],
    bullets: [
      {
        label: "website",
        content: {
          type: "url",
          text: "https://markdown-notes.vercel.app/",
          target: "https://markdown-notes-psi.vercel.app/",
        },
      },
      {
        label: "source",
        content: {
          type: "url",
          text: "github.com",
          target: "https://github.com/antoninpire/markdown-notes",
        },
      },
      {
        label: "stack",
        content: {
          type: "text",
          text: "Svelte / SvelteKit / PocketBase",
        },
      },
      {
        label: "other",
        content: {
          type: "text",
          text: "Milkdown / Tailwind / Zod",
        },
      },
    ],
    features: [
      "Auth system w/ Pocketbase",
      "View all your notes and navigate through them",
      "Create a note or a folder, with the integrated context menus (right click) on the left panel",
      "Edit a note with instant markdown preview and parsing",
      "Easily open your most recently edited note",
      "Add notes within folders and delete any note / folder with the context menu (right click)",
    ],
  },
  "polls-app": {
    name: "Polls App",
    description:
      "A simple poll app which lets authenticated users create their own polls and make them available to everyone. Other users can then vote and see the results after their vote or once the poll has ended.",
    images: [
      [
        {
          alt: "Polls",
          src: polls,
        },
      ],
      [
        {
          alt: "Poll",
          src: poll,
        },
      ],
      [
        {
          alt: "Poll Create",
          src: pollCreate,
        },
        {
          alt: "Poll Login",
          src: pollLogin,
        },
      ],
    ],
    bullets: [
      {
        label: "website",
        content: {
          type: "url",
          text: "https://polls.antonin.dev/",
          target: "https://polls.antonin.dev/",
        },
      },
      {
        label: "source",
        content: {
          type: "url",
          text: "github.com",
          target: "https://github.com/antoninpire/polls-app",
        },
      },
      {
        label: "stack",
        content: {
          type: "text",
          text: "Vue / Nuxt / MySQL",
        },
      },
      {
        label: "other",
        content: {
          type: "text",
          text: "TRPC / Prisma / Nuxt Auth / Zod / Tailwind",
        },
      },
    ],
    features: [
      "Auth system w/ HTTP Cookies",
      "See all polls with the possibility to filter through them",
      "Create a poll with 2-4 options and a duration",
      "View comments on any poll and add your own",
    ],
  },
  "kanban-app": {
    name: "Kanban App",
    description:
      "A simple kanban app which is made for personnal use. It allows you to create an account, create your boards / columns / tasks / tags etc and swap their order as you want just like in Trello",
    images: [
      [
        {
          alt: "Kanban Homescreen",
          src: kanban,
        },
      ],
      [
        {
          alt: "Kanban Main Screen",
          src: kanbanMain,
        },
      ],
      [
        {
          alt: "Kanban Edit Task",
          src: kanbanEditTask,
        },
      ],
      [
        {
          alt: "Kanban Add Task",
          src: kanbanAddTask,
        },
        {
          alt: "Kanban Manage Tags",
          src: kanbanManageTags,
        },
      ],
    ],
    bullets: [
      {
        label: "website",
        content: {
          type: "url",
          text: "https://kanban.antonin.dev/",
          target: "https://kanban.antonin.dev/",
        },
      },
      {
        label: "source",
        content: {
          type: "url",
          text: "github.com",
          target: "https://github.com/antoninpire/svelte-kanban-app",
        },
      },
      {
        label: "stack",
        content: {
          type: "text",
          text: "Svelte / SvelteKit / PostgreSQL",
        },
      },
      {
        label: "other",
        content: {
          type: "text",
          text: "TRPC / Prisma / Lucia / Zod / Tailwind",
        },
      },
    ],
    features: [
      "Auth system w/ HTTP Cookies",
      "See all your boards, tasks and tags and change their order with simple gestures",
      "Create as many as tags as you want per board and attribute them to your tasks",
      "Create tasks with optional end dates, tags, subtasks...",
    ],
  },
  "typing-app": {
    name: "Typing Speed App",
    description:
      "A simple typing speed game helping you measure your WPM (words per minute). If you create an account, you can have access to an history as well as compare yourself to others in the leaderboard.",
    images: [
      [
        {
          alt: "Typing App Homescreen",
          src: typing,
        },
      ],
      [
        {
          alt: "Typing App Mocha",
          src: typingMocha,
        },
      ],
      [
        {
          alt: "Typing App Themes",
          src: typingThemes,
        },
      ],
      [
        {
          alt: "Typing App Profile",
          src: typingProfile,
        },
      ],
      [
        {
          alt: "Typing App Leaderboard",
          src: typingLeaderboard,
        },
      ],
    ],
    bullets: [
      {
        label: "website",
        content: {
          type: "url",
          text: "https://typing.antonin.dev/",
          target: "https://typing.antonin.dev/",
        },
      },
      {
        label: "source",
        content: {
          type: "url",
          text: "github.com",
          target: "https://github.com/antoninpire/typing-speed",
        },
      },
      {
        label: "stack",
        content: {
          type: "text",
          text: "NextJS / React / PostgreSQL",
        },
      },
      {
        label: "other",
        content: {
          type: "text",
          text: "TRPC / Prisma / Auth.js / Zod / Tailwind / Zustand / Radix",
        },
      },
    ],
    features: [
      "Auth system w/ HTTP Cookies",
      "Choose a duration and a type of shown characters, and start typing to get your WPM stats",
      "View a leaderboard of all the best recorded WPMs and filter through it",
      "View your profile games history, as well as various stats regarding your WPM and amount of games",
    ],
  },
} satisfies TProject;
