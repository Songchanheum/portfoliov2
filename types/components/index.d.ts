type Skill = {
  title: string;
  src: Array<string>;
  percent: Array<number>;
};
interface SkilType {
  title: string;
  info: Array<Skill>;
}

interface ChatType {
  type: string;
  text: string;
}
interface CareerType {
  img: string;
  title: string;
  subTitle: string;
  due: string;
  skill: Array<string>;
  experience: Array<string>;
}

interface ExperienceCardType {
  title: string;
  subtitle?: string;
  time?: string;
  text?: string;
}

interface ProjectType {
  title: string;
  description: string;
  code: string;
  due: string;
  skill: string[];
  info: string[];
  role?: string[];
  purpose?: string[];
  result?: string[];
  link?: string[];
  color?: string;
  src?: string;
  icon?: string;
}
interface CompanyType {
  title: string;
  due: string;
  team: string;
  img: string;
  skill: Array<string>;
  project: Array<ProjectType>;
}
interface MetaType {
  title: string;
  image?: string;
  desc?: string;
  url?: string;
}
