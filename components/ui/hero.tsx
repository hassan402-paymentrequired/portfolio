import SplitText from '../../components/animateText'
import Span from '../span'

const hero = () => {
    return (
        <div className='w-full min-h-screen flex box-border overflow-hidden flex-col  items-start justify-center'>
            <div className='w-full max-w-5xl m-auto'>
                <Span />
                <div className="flex flex-col">
                    <h1 className="text-5xl font-bold text-white">Welcome to</h1>
                </div>
                <SplitText
                    text="laramic studio"
                    className="text-[120px] max-md:text-[120px] max-sm:text-[70px] font-semibold text-center uppercase"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                // onLetterAnimationComplete={handleAnimationComplete}
                />
            </div>
        </div>
    )
}

export default hero