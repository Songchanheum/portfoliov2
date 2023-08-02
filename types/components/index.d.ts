type Skill = {
  title: string;
  src: Array<string>;
  percent: Array<number>;
};
interface SkilType {
  title: string;
  info: Array<Skill>;
}
interface CareerType {
  img: string;
  title: string;
  subTitle: string;
  due: string;
  skill: Array<string>;
  experience: Array<string>;
}
