export type DrawerButtonProps = {
  open: Boolean;
  handleDrawerOpen: () => void;
};

export type DrawerProps = {
  open: boolean;
  handleDrawerClose: () => void;
};

export type DrawerItemProps = {
  index: number;
  text: string;
  open: boolean;
};

export type DrawerItemsProps = {
  open: boolean;
};
