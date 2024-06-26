import { PureHTMLMatches } from '../../core/backend';
import { Config, ExtractParams } from '../config';

export interface ConfigWithSelectorExtractParams extends ExtractParams {
  elementAlreadyMatched?: boolean;
}

export interface GetSelectorMatchesParams {
  alreadyMatched: boolean;
  includeRoot: boolean;
}

export default abstract class ConfigWithSelector extends Config {
  protected selector: string | null = null;

  abstract extract(params: ConfigWithSelectorExtractParams): unknown;

  getSelectorMatches(
    $: PureHTMLMatches,
    { alreadyMatched, includeRoot }: GetSelectorMatchesParams
  ): PureHTMLMatches {
    if (alreadyMatched) {
      return $;
    }

    if (this.selector === null) {
      return $;
    }

    // check if the element *itself* matches the given selector
    if (includeRoot && $.is(this.selector)) {
      return $;
    }

    return $.find(this.selector);
  }
}
