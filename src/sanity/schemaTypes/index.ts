import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { heroType2 } from "./heroTypes2";
import { siteSettingsType } from "./siteSettingsType";
import { pageType } from "./pageType";
import { pageBuilderType } from "./pageBuilderType";
import { faqType } from "./faqType";
import { faqsType } from "./faqsType";
import { featuresType } from "./featuresType";
import { heroType } from "./heroType";
import { splitImageType } from "./splitImageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettingsType,
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroType2,
    pageType,
    pageBuilderType,
    faqType,
    faqsType,
    featuresType,
    heroType,
    splitImageType,
  ],
};
