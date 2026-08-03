import React from "react";

export type IconComponent = React.ComponentType<{ className?: string }>;

export interface NavLink {
  readonly name: string;
  readonly href: string;
}

export interface IndustryItem {
  readonly name: string;
  readonly image: string;
}

export interface CoreValueItem {
  readonly title: string;
  readonly tagline: string;
  readonly desc: string;
  readonly icon: IconComponent;
  readonly color: string;
}

export interface WhyChooseItem {
  readonly title: string;
  readonly desc: string;
  readonly icon?: IconComponent;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly desc: string;
  readonly icon: IconComponent;
  readonly image: string;
  readonly listTitle1: string;
  readonly list1: readonly string[];
  readonly listTitle2: string | null;
  readonly list2: readonly string[] | null;
}

export interface EmirateItem {
  readonly name: string;
  readonly image: string;
}

export interface FAQItemData {
  readonly question: string;
  readonly answer: string;
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly desc: string;
  readonly icon: IconComponent;
}
