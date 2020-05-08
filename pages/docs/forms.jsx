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

function Forms() {
  return (
    <Layout>
      <H2>Forms</H2>
      <Lead>Form components using Tailwind CSS to speed up your project.</Lead>
      <hr className="mb-3" />

      <ExampleSection id="simple">
        <H4>Simple input</H4>
        <P>A simple input component.</P>
        <CodeCard lang="html" code={simpleInputCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Forms
