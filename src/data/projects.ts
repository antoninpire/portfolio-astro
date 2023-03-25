import kanban from "@assets/Kanban-home.png";
import markdown from "@assets/markdown-editor-note.png";
import natflix from "@assets/natflix.png";
import polls from "@assets/polls.png";
import sinta from "@assets/sinta.png";
import typing from "@assets/typing.png";
import type { PROJECT_NAMES } from "@data/project";

type TProjects = {
  label: string;
  description: string;
  src: ImageMetadata;
  slug: PROJECT_NAMES;
};

export default [
  {
    label: "Sinta",
    description:
      "An app made for couples, where soulmates can interact with each other, share memories, medias...",
    src: sinta,
    slug: "sinta",
  },
  {
    label: "Typing Speed App",
    description:
      "A simple typing game to measure your WPM (words per minute), made using React & NextJS",
    src: typing,
    slug: "typing-app",
  },
  {
    label: "Kanban App",
    description:
      "A kanban app made for personnal use, made using Svelte & SvelteKit",
    src: kanban,
    slug: "kanban-app",
  },
  {
    label: "Polls App",
    description: "A simple polls app implemented using Vue & Nuxt",
    src: polls,
    slug: "polls-app",
  },
  {
    label: "Markdown Editor",
    description: "A markdown note taking app built using Svelte & SvelteKit",
    src: markdown,
    slug: "markdown-editor",
  },
  {
    label: "Natflix",
    description:
      "An netflix inspired website implementing machine learning for content suggestions",
    src: natflix,
    slug: "natflix",
  },
] satisfies TProjects[];
