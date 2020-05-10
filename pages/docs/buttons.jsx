import React from 'react'
import Layout from '../../containers/Layout'
import H2 from '../../components/Headings/H2'
import H4 from '../../components/Headings/H4'
import Lead from '../../components/Text/Lead'
import P from '../../components/Text/P'
import CodeCard from '../../components/CodeCard'
import ExampleSection from '../../components/ExampleSection'

const buttonSizesCode = `
<button class="rounded-lg px-6 h-12 text-lg text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">Large</button>
<button class="rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">Regular</button>
<button class="rounded-lg px-4 h-8 text-sm text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">Small</button>
<a class="rounded-lg px-4 h-8 text-sm text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center" href="#">Link</a>
<input class="rounded-lg px-4 h-8 text-sm text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 cursor-pointer" type="submit" value="Input">
`

const buttonBlockCode = `
<button class="w-full rounded-lg px-6 h-12 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">Large block button</button>
`

const buttonColorsCode = `
<button class="rounded-lg px-5 h-10 text-red-100 bg-red-700 focus:shadow-outline hover:bg-red-800 transition-colors duration-150">Danger</button>
<button class="rounded-lg px-5 h-10 text-green-100 bg-green-700 focus:shadow-outline hover:bg-green-800 transition-colors duration-150">Success</button>
<button class="rounded-lg px-5 h-10 text-blue-100 bg-blue-600 focus:shadow-outline hover:bg-blue-700 transition-colors duration-150">Info</button>
<button class="rounded-lg px-5 h-10 text-gray-100 bg-gray-700 focus:shadow-outline hover:bg-gray-800 transition-colors duration-150">Secondary</button>
<button class="rounded-lg px-5 h-10 text-pink-100 bg-pink-600 focus:shadow-outline hover:bg-pink-700 transition-colors duration-150">Pink</button>
<button class="rounded-lg px-5 h-10 text-purple-100 bg-purple-600 focus:shadow-outline hover:bg-purple-700 transition-colors duration-150">Purple</button>
<button class="rounded-lg px-5 h-10 text-gray-800 bg-white focus:shadow-outline hover:bg-gray-200 transition-colors duration-150">White</button>
`

const buttonOutlineCode = `
<button class="rounded-lg px-5 h-10 text-indigo-700 border border-indigo-500 focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 transition-colors duration-150">Outline</button>
`

const buttonIconRightCode = `
<button class="rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center">
  <span>With icon</span>
  <svg class="fill-current h-4 w-4 ml-3" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
</button>
`

const buttonIconLeftCode = `
<button class="rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center">
  <svg class="fill-current h-4 w-4 mr-3" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  <span>With icon</span>
</button>
`

const buttonGroupCode = `
<div class="inline-flex" role="group" aria-label="Button group">
  <button class="rounded-l-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">Left</button>
  <button class="px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">Middle</button>
  <button class="rounded-r-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">Right</button>
</div>
`

const buttonPillCode = `
<button class="rounded-full px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">Pill button</button>
`

const buttonIconCode = `
<button class="rounded-full w-10 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center justify-center">
  <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
</button>
<button class="rounded-lg w-10 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150 inline-flex items-center justify-center">
  <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
</button>
<button class="rounded-full w-10 h-10 text-gray-700 bg-white focus:shadow-outline hover:bg-gray-200 transition-colors duration-150 inline-flex items-center justify-center">
  <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
</button>
`

function Buttons() {
  return (
    <Layout>
      <H2>Buttons</H2>
      <Lead>Button components using Tailwind CSS to speed up your project.</Lead>
      <hr className="mb-3" />

      <ExampleSection id="button-sizes">
        <H4>Button sizes</H4>
        <P>Different sizes of a button component.</P>
        <CodeCard lang="html" code={buttonSizesCode} />
      </ExampleSection>

      <ExampleSection id="button-block">
        <H4>Block button</H4>
        <P>A full-width block button.</P>
        <CodeCard lang="html" code={buttonBlockCode} />
      </ExampleSection>

      <ExampleSection id="button-colors">
        <H4>Button colors</H4>
        <P>Some color variations.</P>
        <CodeCard lang="html" code={buttonColorsCode} />
      </ExampleSection>

      <ExampleSection id="button-outline">
        <H4>Outline button</H4>
        <P>Outlined button.</P>
        <CodeCard lang="html" code={buttonOutlineCode} />
      </ExampleSection>

      <ExampleSection id="button-iconRight">
        <H4>Button with icon right</H4>
        <P>Button with SVG icon right.</P>
        <CodeCard lang="html" code={buttonIconRightCode} />
      </ExampleSection>

      <ExampleSection id="button-iconLeft">
        <H4>Button with icon left</H4>
        <P>Button with SVG icon left.</P>
        <CodeCard lang="html" code={buttonIconLeftCode} />
      </ExampleSection>

      <ExampleSection id="button-group">
        <H4>Button group</H4>
        <P>Group of two or more buttons.</P>
        <CodeCard lang="html" code={buttonGroupCode} />
      </ExampleSection>

      <ExampleSection id="button-pill">
        <H4>Pill button</H4>
        <P>Button with full rounded sides.</P>
        <CodeCard lang="html" code={buttonPillCode} />
      </ExampleSection>

      <ExampleSection id="button-icon">
        <H4>Icon button</H4>
        <P>Button with icon.</P>
        <CodeCard lang="html" code={buttonIconCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Buttons
