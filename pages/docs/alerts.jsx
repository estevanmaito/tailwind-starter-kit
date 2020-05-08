import React from 'react'
import Layout from '../../containers/Layout'
import H2 from '../../components/Headings/H2'
import H4 from '../../components/Headings/H4'
import Lead from '../../components/Text/Lead'
import P from '../../components/Text/P'
import CodeCard from '../../components/CodeCard'
import ExampleSection from '../../components/ExampleSection'

const simpleAlertCode = `
<div class="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg" role="alert">
  <p>A simple alert with text</p>
</div>
`

const alerWithCloseIconCode = `
<div class="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg relative" role="alert">
  <p>A simple alert with text and a right icon</p>
  <span class="absolute right-0 inset-y-0 flex items-center mr-4">
    <svg class="fill-current h-4 w-4" role="button" viewBox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </span>
</div>
`

const alertWithLinkCode = `
<div class="px-4 py-3 leading-normal text-orange-700 bg-orange-100 rounded-lg" role="alert">
  <p>A simple alert with text <a class="font-bold hover:underline" href="#">and a link</a>. Check it out!</p>
</div>
`

const alertWithHeaderCode = `
<div class="px-4 py-3 leading-normal text-green-700 bg-green-100 rounded-lg" role="alert">
  <p class="font-bold">You are the visitor 1000!</p>
  <p>A simple alert with text and header. Check it out!</p>
</div>
`

const alertWithLeftIconCode = `
<div class="px-4 py-3 leading-normal text-red-700 bg-red-100 rounded-lg relative" role="alert">
  <span class="absolute left-0 inset-y-0 flex items-center ml-4">
    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </span>
  <p class="ml-6">A simple alert with text and an icon. Check it out!</p>
</div>
`

const alertFilledCode = `
<div class="px-4 py-3 leading-normal bg-red-700 text-red-100 rounded-lg" role="alert">
  <p>A simple alert with text and an icon. Check it out!</p>
</div>
`

const alertFilledHeaderCode = `
<div class="leading-normal rounded-lg overflow-hidden" role="alert">
  <p class="py-3 px-4 font-bold text-purple-100 bg-purple-800">You're being notified</p>
  <p class="py-3 px-4 text-purple-700 bg-purple-100 ">A simple alert with text and a filled header. Check it out!</p>
</div>
`

const alertBorderedCode = `
<div class="px-4 py-3 leading-normal rounded-lg text-indigo-700 border border-indigo-500" role="alert">
  <p">A simple alert with text and borders!</p>
</div>
`

function Alerts() {
  return (
    <Layout>
      <H2>Alerts</H2>
      <Lead>Alert components using Tailwind CSS to speed up your project.</Lead>
      <hr className="mb-3" />

      <ExampleSection id="simple">
        <H4>Simple</H4>
        <P>A simple alert component with text.</P>
        <CodeCard lang="html" code={simpleAlertCode} />
      </ExampleSection>

      <ExampleSection>
        <H4>With close icon</H4>
        <P>A simple alert component with text and a right icon.</P>
        <CodeCard lang="html" code={alerWithCloseIconCode} />
      </ExampleSection>

      <ExampleSection>
        <H4>With link</H4>
        <P>A simple alert component with text and link.</P>
        <CodeCard lang="html" code={alertWithLinkCode} />
      </ExampleSection>

      <ExampleSection>
        <H4>With header</H4>
        <P>A simple alert component with text and header.</P>
        <CodeCard lang="html" code={alertWithHeaderCode} />
      </ExampleSection>

      <ExampleSection>
        <H4>With icon</H4>
        <P>A simple alert component with text and a left icon.</P>
        <CodeCard lang="html" code={alertWithLeftIconCode} />
      </ExampleSection>

      <ExampleSection>
        <H4>Filled background</H4>
        <P>A simple alert component with filled background and text.</P>
        <CodeCard lang="html" code={alertFilledCode} />
      </ExampleSection>

      <ExampleSection>
        <H4>Filled header</H4>
        <P>A simple alert component with filled header and text.</P>
        <CodeCard lang="html" code={alertFilledHeaderCode} />
      </ExampleSection>

      <ExampleSection>
        <H4>With border</H4>
        <P>A simple alert component with border and text.</P>
        <CodeCard lang="html" code={alertBorderedCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Alerts
