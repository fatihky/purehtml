import { Arrays } from './components/Arrays';
import { Basics } from './components/Basics';
import { ConstantConfig } from './components/ConstantConfig';
import { GettingStarted } from './components/GettingStarted';
import { Intro } from './components/Intro';
import { Objects } from './components/Objects';
import { Transformers } from './components/Transformers/Transformers';
import { UnionConfig } from './components/UnionConfig';

export function Home() {
  return (
    <>
      <Intro />
      <GettingStarted />
      <Basics />
      <ConstantConfig />
      <Arrays />
      <Objects />
      <Transformers />
      <UnionConfig />
    </>
  );
}
