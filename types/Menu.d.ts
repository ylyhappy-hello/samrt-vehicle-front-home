interface Menu {
  title: string;
  icon?: string;
  active?: boolean;
  routeName?: string | symbol;
}
interface IMenu extends Menu {
  children?: Menu[];
}
