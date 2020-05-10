import React from 'react'
import Layout from '../../containers/Layout'
import H2 from '../../components/Headings/H2'
import H4 from '../../components/Headings/H4'
import Lead from '../../components/Text/Lead'
import P from '../../components/Text/P'
import CodeCard from '../../components/CodeCard'
import ExampleSection from '../../components/ExampleSection'

const badgeSizesCode = `
<span class="rounded-full h-2 w-2 inline-block bg-red-600"></span>
<span class="rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600">9</span>
<span class="rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600">99+</span>
`

const badgeButtonCode = `
<button class="rounded-lg px-5 h-10 text-indigo-100 bg-indigo-700 focus:shadow-outline hover:bg-indigo-800 transition-colors duration-150">
  <span class="mr-2">Button</span>
  <span class="rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600">9</span>
</button>
`

const badgeIconCode = `
<span class="inline-block relative">
  <svg class="fill-current text-gray-700 h-6 w-6" viewBox="0 0 20 20"><path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2  rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600">99</span>
</span>
<span class="inline-block relative ml-8">
  <svg class="fill-current text-gray-700 h-6 w-6" viewBox="0 0 20 20"><path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  <span class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rounded-full h-2 w-2 inline-block bg-red-600"></span>
</span>
`

const badgeTextCode = `
<span class="rounded-full py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-red-100 bg-red-600">NEW</span>
<span class="rounded py-1 px-2 inline-flex items-center justify-center text-xs leading-none font-bold text-indigo-100 bg-indigo-700">NEW</span>
`

function Badge() {
  return (
    <Layout>
      <H2>Badge</H2>
      <Lead>Badge component using Tailwind CSS to speed up your project.</Lead>
      <hr className="my-8" />

      <ExampleSection id="badge-sizes">
        <H4>Badge sizes</H4>
        <P>
          Different sized badges. The ones with text are the same and expand with the inner text.
        </P>
        <CodeCard lang="html" code={badgeSizesCode} />
      </ExampleSection>

      <ExampleSection id="badge-button">
        <H4>Button with badge</H4>
        <P>A button with a badge inside.</P>
        <CodeCard lang="html" code={badgeButtonCode} />
      </ExampleSection>

      <ExampleSection id="badge-icon">
        <H4>Icon with badge</H4>
        <P>An icon with a badge inside.</P>
        <CodeCard lang="html" code={badgeIconCode} />
      </ExampleSection>

      <ExampleSection id="badge-text">
        <H4>Text badge</H4>
        <P>Round and square badges with text.</P>
        <CodeCard lang="html" code={badgeTextCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Badge
