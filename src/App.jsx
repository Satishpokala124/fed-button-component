import Button from 'src/components/Button';
import ButtonVariant from 'src/components/ButtonVariant';

function App() {
  return (
    <div className='container mx-auto py-14'>
      <h1 className='text-2xl mb-10'>Buttons</h1>
      <div className='flex flex-col gap-y-12'>
        <div className='flex gap-x-12'>
          <ButtonVariant text='<Button />'>
            <Button />
          </ButtonVariant>
        </div>
        <div className='flex'>
          <ButtonVariant text='<Button variant="outline" color="primary"/>'>
            <Button variant='outline' color='primary' />
          </ButtonVariant>
        </div>
        <div className='flex'>
          <ButtonVariant text='<Button color="primary" disableShadow />'>
            <Button color='primary' disableShadow />
          </ButtonVariant>
        </div>
        <div className='flex gflex-wrap gap-20'>
          <ButtonVariant text='<Button text="Disabled" disabled />'>
            <Button text='Disabled' disabled />
          </ButtonVariant>
          <ButtonVariant text='<Button text="Disabled" variant="text" disabled />'>
            <Button text='Disabled' variant='text' disabled />
          </ButtonVariant>
        </div>
        <div className='flex flex-wrap gap-20'>
          <ButtonVariant text='<Button color="primary" startIcon="home" />'>
            <Button color='primary' startIcon='home' />
          </ButtonVariant>
          <ButtonVariant text='<Button color="primary" endIcon="search" />'>
            <Button color='primary' endIcon='search' />
          </ButtonVariant>
        </div>
        <div className='flex flex-wrap gap-20'>
          <ButtonVariant text='<Button color="primary" size="sm" />'>
            <Button color='primary' size='sm' />
          </ButtonVariant>
          <ButtonVariant text='<Button color="primary" size="md" />'>
            <Button color='primary' size='md' />
          </ButtonVariant>
          <ButtonVariant text='<Button color="primary" size="lg" />'>
            <Button color='primary' size='lg' />
          </ButtonVariant>
        </div>
        <div className='flex flex-wrap gap-20'>
          <ButtonVariant text='<Button color="default" />'>
            <Button color='default' />
          </ButtonVariant>
          <ButtonVariant text='<Button color="primary" />'>
            <Button color='primary' />
          </ButtonVariant>
          <ButtonVariant text='<Button color="secondary" />'>
            <Button color='secondary' />
          </ButtonVariant>
          <ButtonVariant text='<Button color="danger" />'>
            <Button color='danger' />
          </ButtonVariant>
        </div>
      </div>
      <footer className='flex justify-center align-center pt-16 pb-6 font-semi text-small text-[#A9A9A9]'>
        created by
        <a
          className='transition-all hover:text-black hover:underline mx-1'
          href='https://devchallenges.io/portfolio/Satishpokala124'
        >
          Satishpokala124
        </a>
        -
        <a
          className='transition-all hover:text-black hover:underline mx-1'
          href='https://devchallenges.io/'
        >
          devChallenges.io
        </a>
      </footer>
    </div>
  );
}

export default App;
