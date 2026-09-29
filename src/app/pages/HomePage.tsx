import { Hero } from '../components/Hero'
import { TrustStrip } from '../components/TrustStrip'
import { GmpSolution } from '../components/GmpSolution'
import { Equipment } from '../components/Equipment'
import { HowItWorks } from '../components/HowItWorks'
import { ProcessSteps } from '../components/ProcessSteps'
import { Benefits } from '../components/Benefits'
import { AudienceSelector } from '../components/AudienceSelector'
import { CertTeaser } from '../components/CertTeaser'
import { Faq } from '../components/Faq'
import { QuizFunnel } from '../components/QuizFunnel'
import { CtaBand } from '../components/CtaBand'
import { Reveal } from '@/components/ui/Reveal'

export function HomePage(props: { onOpenQuiz: () => void }) {
  return (
    <>
      <Hero onOpenQuiz={props.onOpenQuiz} />
      <TrustStrip />
      <GmpSolution />
      <Equipment />
      <Reveal>
        <HowItWorks />
      </Reveal>
      <ProcessSteps />
      <Benefits />
      <AudienceSelector />
      <Reveal>
        <CertTeaser />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <QuizFunnel />
      </Reveal>
      <CtaBand />
    </>
  )
}
