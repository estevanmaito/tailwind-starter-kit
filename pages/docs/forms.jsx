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

const checkboxCode = `
<label class="text-gray-700">
  <input type="checkbox" value="">
  <span class="ml-1">Lorem ipsum dolor sit</span>
</label>
`

const radioCode = `
<label class="text-gray-700">
  <input type="radio" value="">
  <span class="ml-1">Lorem ipsum dolor sit</span>
</label>
`

const textareaCode = `
<textarea class="border rounded-lg px-3 py-2 h-16 text-gray-700 placeholder-gray-600 text-base w-full focus:shadow-outline"></textarea>
`

const labelOverInputCode = `
<div class="text-gray-700">
  <label class="block mb-1" for="forms-labelOverInputCode">Full name</label>
  <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" placeholder="Regular input" id="forms-labelOverInputCode">
</div>
`

const labelLeftInputCode = `
<div class="text-gray-700 md:flex md:items-center">
  <div class="mb-1 md:mb-0 md:w-1/3">
    <label for="forms-labelLeftInputCode">Full name</label>
  </div>
  <div class="md:w-2/3 md:flex-grow">
    <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" placeholder="Regular input" id="forms-labelLeftInputCode">
  </div>
</div>
`

const formGridCode = `
<form class="text-gray-700 space-y-4">
  <div class="flex flex-wrap">
    <div class="w-full">
      <label class="block mb-1" for="formGridCode_card">Card number</label>
      <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" id="formGridCode_card">
    </div>
  </div>
  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
    <div class="w-full md:w-1/2 px-2">
      <label class="block mb-1" for="formGridCode_name">First name</label>
      <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" id="formGridCode_name">
    </div>
    <div class="w-full md:w-1/2 px-2">
      <label class="block mb-1" for="formGridCode_last">Last name</label>
      <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" id="formGridCode_last">
    </div>
  </div>
  <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
    <div class="w-full md:w-1/3 px-2">
      <label class="block mb-1" for="formGridCode_month">Month</label>
      <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" id="formGridCode_month">
    </div>
    <div class="w-full md:w-1/3 px-2">
      <label class="block mb-1" for="formGridCode_year">Year</label>
      <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" id="formGridCode_year">
    </div>
    <div class="w-full md:w-1/3 px-2">
      <label class="block mb-1" for="formGridCode_cvc">CVC</label>
      <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" id="formGridCode_cvc">
    </div>
  </div>
</form>
`

const iconRightInputCode = `
<div class="relative text-gray-700">
  <input class="border rounded-lg pl-3 pr-8 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" placeholder="Regular input">
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
    <svg class="fill-current w-4 h-4" viewBox="0 0 20 20"><path d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
  </div>
</div>
`

const iconLeftInputCode = `
<div class="relative text-gray-700">
  <input class="border rounded-lg pr-3 pl-8 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" placeholder="Regular input">
  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
    <svg class="fill-current w-4 h-4" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  </div>
</div>
`

const buttonRightInputCode = `
<div class="relative text-gray-700">
  <input class="border rounded-lg pl-3 pr-8 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="text" placeholder="Regular input">
  <button class="absolute inset-y-0 right-0 flex items-center px-4 bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-700 text-white rounded-r-lg font-bold">Click</button>
</div>
`

const helperTextCode = `
<div class="text-gray-700">
  <label class="block mb-1" for="forms-helpTextCode">Password</label>
  <input class="border rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="password" id="forms-helpTextCode">
  <span class="text-xs text-gray-600">Your password must be at least 6 characters long.</span>
</div>
`

const validationInputCode = `
<div class="text-gray-700 mb-4">
  <label class="block mb-1" for="forms-validationInputCode_error">Password</label>
  <input class="border border-red-700 rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="password" id="forms-validationInputCode_error">
  <span class="text-xs text-red-700">Your password is too short.</span>
</div>
<div class="text-gray-700">
  <label class="block mb-1" for="forms-validationInputCode_success">Password</label>
  <input class="border border-green-500 rounded-lg px-3 h-10 placeholder-gray-600 text-base w-full focus:shadow-outline" type="password" id="forms-validationInputCode_success">
  <span class="text-xs text-green-700">Your password is strong.</span>
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

      <ExampleSection id="checkbox">
        <H4>Checkbox</H4>
        <P>
          A checkbox component. If you're looking for a more elaborate checkbox, I recommend using{' '}
          <a
            className="font-bold underline hover:text-gray-600"
            href="https://tailwindcss-custom-forms.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Custom Forms
          </a>
          , an official library to extend the look of general form elements with custom CSS.
        </P>
        <CodeCard lang="html" code={checkboxCode} />
      </ExampleSection>

      <ExampleSection id="radio">
        <H4>Radio</H4>
        <P>
          A radio component. If you're looking for a more elaborate radio button, I recommend using{' '}
          <a
            className="font-bold underline hover:text-gray-600"
            href="https://tailwindcss-custom-forms.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Custom Forms
          </a>
          , an official library to extend the look of general form elements with custom CSS.
        </P>
        <CodeCard lang="html" code={radioCode} />
      </ExampleSection>

      <ExampleSection id="textarea">
        <H4>Textarea</H4>
        <P>A simple textarea component.</P>
        <CodeCard lang="html" code={textareaCode} />
      </ExampleSection>

      <ExampleSection id="labelOverInputCode">
        <H4>Label over</H4>
        <P>A simple input component with label over.</P>
        <CodeCard lang="html" code={labelOverInputCode} />
      </ExampleSection>

      <ExampleSection id="labelLeftInputCode">
        <H4>Label left</H4>
        <P>
          A responsive form group with label and input, with left text on desktop and over the input
          on mobile.
        </P>
        <CodeCard lang="html" code={labelLeftInputCode} />
      </ExampleSection>

      <ExampleSection id="formGridCode">
        <H4>Form grid</H4>
        <P>A responsive form grid.</P>
        <CodeCard lang="html" code={formGridCode} />
      </ExampleSection>

      <ExampleSection id="iconRightInputCode">
        <H4>Input with icon right</H4>
        <P>Input with SVG icon right.</P>
        <CodeCard lang="html" code={iconRightInputCode} />
      </ExampleSection>

      <ExampleSection id="iconLeftInputCode">
        <H4>Input with icon left</H4>
        <P>Input with SVG icon left.</P>
        <CodeCard lang="html" code={iconLeftInputCode} />
      </ExampleSection>

      <ExampleSection id="buttonRightInputCode">
        <H4>Input with button right</H4>
        <P>Input with button inside.</P>
        <CodeCard lang="html" code={buttonRightInputCode} />
      </ExampleSection>

      <ExampleSection id="helperTextCode">
        <H4>Helper text</H4>
        <P>Input with bottom helper text.</P>
        <CodeCard lang="html" code={helperTextCode} />
      </ExampleSection>

      <ExampleSection id="validationInputCode">
        <H4>Input with validation</H4>
        <P>Input with bottom validation text and colored borders.</P>
        <CodeCard lang="html" code={validationInputCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Forms
