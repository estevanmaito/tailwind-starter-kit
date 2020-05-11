import React from 'react'
import Layout from '../../containers/Layout'
import H2 from '../../components/Headings/H2'
import H4 from '../../components/Headings/H4'
import Lead from '../../components/Text/Lead'
import P from '../../components/Text/P'
import CodeCard from '../../components/CodeCard'
import ExampleSection from '../../components/ExampleSection'

const cardImageCode = `
<div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
  <img class="w-full h-48 object-cover" src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Flower and sky"/>
</div>
`

const cardTextCode = `
<div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <h4 class="font-semibold text-gray-800 tracking-tight text-xl mb-3">This is the title</h4>
    <p class="text-gray-700 leading-normal">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
  </div>
</div>
`

const cardImageTextCode = `
<div class="max-w-xs rounded-lg overflow-hidden shadow-lg">
  <img class="w-full h-48 object-cover" src="https://images.pexels.com/photos/2033997/pexels-photo-2033997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Flower and sky"/>
  <div class="px-6 py-4">
    <h4 class="font-semibold text-gray-800 tracking-tight text-xl mb-3">This is the title</h4>
    <p class="text-gray-700 leading-normal">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
  </div>
</div>
`

const cardHorizontalCode = `
<div class="w-full max-w-lg rounded-lg overflow-hidden shadow-lg sm:flex">
  <img class="w-full h-48 sm:w-48 object-cover" src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky"/>
  <div class="px-6 py-4">
    <h4 class="font-semibold text-gray-800 tracking-tight text-xl mb-3">This is the title</h4>
    <p class="text-gray-700 leading-normal">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
  </div>
</div>
`

const cardTextOverImageCode = `
<div class="max-w-xs rounded-lg overflow-hidden shadow-lg relative">
  <img class="w-full h-48 object-cover" src="https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Flower and sky"/>
  <div class="px-6 py-4 absolute left-0 top-0">
    <h4 class="font-semibold text-white tracking-tight text-xl mb-3">This is the title</h4>
    <p class="text-gray-100 leading-normal">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
  </div>
</div>
`

function Cards() {
  return (
    <Layout>
      <H2>Cards</H2>
      <Lead>Card components using Tailwind CSS to speed up your project.</Lead>
      <hr className="my-8" />

      <ExampleSection id="cards-image">
        <H4>Card with image</H4>
        <P>Card with just an image.</P>
        <CodeCard lang="html" code={cardImageCode} />
      </ExampleSection>

      <ExampleSection id="cards-Text">
        <H4>Card with text</H4>
        <P>Card with just text.</P>
        <CodeCard lang="html" code={cardTextCode} />
      </ExampleSection>

      <ExampleSection id="cards-imageAndText">
        <H4>Card with image and text</H4>
        <P>Card with top image and text.</P>
        <CodeCard lang="html" code={cardImageTextCode} />
      </ExampleSection>

      <ExampleSection id="cards-horizontal">
        <H4>Card horizontal</H4>
        <P>Card with top image and text side-by-side.</P>
        <CodeCard lang="html" code={cardHorizontalCode} />
      </ExampleSection>

      <ExampleSection id="cards-textOverImage">
        <H4>Card image with text over</H4>
        <P>Card with backrgound image and text.</P>
        <CodeCard lang="html" code={cardTextOverImageCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Cards
