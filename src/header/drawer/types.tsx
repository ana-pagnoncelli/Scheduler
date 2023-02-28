export type DrawerButtonProps = {
  open: Boolean;
  handleDrawerOpen: () => void;
};

export type DrawerProps = {
  open: boolean;
  handleDrawerClose: () => void;
};

export type DrawerItemInfo = {
  name: string;
  icon: JSX.Element;
  path: string;
};

export type DrawerItemProps = {
  item: DrawerItemInfo;
  open: boolean;
};

export type DrawerItemsProps = {
  open: boolean;
};
