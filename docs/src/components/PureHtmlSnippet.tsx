import { CodeHighlightTabs } from '@mantine/code-highlight';
import { usePureHtml } from '../hooks/usePureHtml';

export function PureHtmlSnippet({
  inputHtml,
  configYaml,
}: {
  inputHtml: string;
  configYaml: string;
}) {
  const outputJson = usePureHtml({ inputHtml, configYaml });

  return (
    <CodeHighlightTabs
      code={[
        { fileName: 'input.html', code: inputHtml, language: 'html' },
        { fileName: 'config.yaml', code: configYaml, language: 'yaml' },
        { fileName: 'output.json', code: outputJson, language: 'json' },
      ]}
      mt="md"
    />
  );
}
