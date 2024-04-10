import Header from '@/components/shared/Header';
import SectionContainer from '@/components/shared/SectionContainer';
import { ComponentDemo } from '../../../demo/demo';

export default function Demo() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      <SectionContainer type="ultrawide">
        <ComponentDemo />
      </SectionContainer>
    </div>
  );
}
