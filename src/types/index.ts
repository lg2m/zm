export interface NavItem {
  title: string,
  href: string,
  disabled?: boolean,
}

export interface Author {
  name: string;
  url: string;
}

export interface SiteConfig {
  name: string,
  description: string,
  keywords: string[],
  authors: Author[],
  url: string,
  nav: NavItem[],
}
