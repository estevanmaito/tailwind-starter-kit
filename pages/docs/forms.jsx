import React from 'react'
import Layout from '../../containers/Layout'
import H2 from '../../components/Headings/H2'
import H4 from '../../components/Headings/H4'
import Lead from '../../components/Text/Lead'
import P from '../../components/Text/P'
import CodeCard from '../../components/CodeCard'
import ExampleSection from '../../components/ExampleSection'

const simpleInputCode = `
<input class="border rounded-lg px-4 h-12 text-gray-700 placeholder-gray-600 text-lg w-full focus:shadow-outline mb-2" type="text" placeholder="Large input">
<input class="border rounded-lg px-3 h-10 text-gray-700 placeholder-gray-600 text-base w-full focus:shadow-outline mb-2" type="text" placeholder="Regular input">
<input class="border rounded-lg px-2 h-8 text-gray-700 placeholder-gray-600 text-sm focus:shadow-outline w-full" type="text" placeholder="Small input">
`

const simpleSelectCode = `
<div class="relative inline-block text-gray-700 w-full">
  <select class="appearance-none border rounded-lg pl-3 pr-6 h-10  placeholder-gray-600 text-base w-full focus:shadow-outline" placeholder="Regular input">
    <option>A regular sized select input</option>
    <option>Another option</option>
    <option>And one more</option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
    <svg class="fill-current w-4 h-4" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
</div>
`

function Forms() {
  return (
    <Layout>
      <H2>Forms</H2>
      <Lead>Form components using Tailwind CSS to speed up your project.</Lead>
      <hr className="mb-3" />

      <ExampleSection id="simple-input">
        <H4>Simple input</H4>
        <P>A simple input component.</P>
        <CodeCard lang="html" code={simpleInputCode} />
      </ExampleSection>

      <ExampleSection id="simple-select">
        <H4>Simple select</H4>
        <P>A simple select component.</P>
        <CodeCard lang="html" code={simpleSelectCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Forms
