/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.css';
declare module '*.scss';
declare module '*.module.scss';
declare module '*.sass';
declare module '*.less';
declare module "*.png";
declare module "*.d.ts";
declare module "umi";
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
}
