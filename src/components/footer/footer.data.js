import Chat from "assets/widget/chat.svg";
import Community from "assets/widget/community.svg";
import Github from "assets/widget/github.svg";

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: "Community",
      title: "Join the Community",
      description:
        "Connect with like-minded professionals, entrepreneurs, and industry experts who share a passion for success.",
    },
    {
      id: 2,
      iconSrc: Community,
      altText: "Chat",
      title: "Chat Communication",
      description:
        "Our chat feature enables real-time communication, allowing you to connect with our consultants instantly.",
    },
    {
      id: 3,
      iconSrc: Github,
      altText: "Github",
      title: "Github Access",
      description:
        "With GitHub, multiple team members can work simultaneously on different branches of the project.",
    },
  ],
  menuItem: [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/",
      label: "Adversite",
    },
    {
      path: "/",
      label: "Supports",
    },
    {
      path: "/",
      label: "Marketing",
    },
    {
      path: "/",
      label: "Contact",
    },
  ],
};
