declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    revert(): void;
    static register(gsap: any): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    constructor(vars?: any);
    static create(vars?: any): ScrollSmoother;
    paused(value: boolean): void;
    scrollTop(): number;
    scrollTop(value: number): void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    static register(gsap: any): void;
  }
}
