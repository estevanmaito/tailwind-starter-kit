import React from 'react'
import Link from 'next/link'
import Layout from '../../containers/Layout'
import H2 from '../../components/Headings/H2'
import H4 from '../../components/Headings/H4'
import Lead from '../../components/Text/Lead'
import P from '../../components/Text/P'
import CodeCard from '../../components/CodeCard'
import ExampleSection from '../../components/ExampleSection'
import SEO from '../../components/SEO'

const paginationButtonCode = `
<nav aria-label="Page navigation">
  <ul class="inline-flex">
    <li><button class="rounded-l-lg px-5 h-10 text-indigo-600 bg-white focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">Prev</button></li>
    <li><button class="px-5 h-10 text-white bg-indigo-600 focus:shadow-outline transition-colors duration-150">1</button></li>
    <li><button class="px-5 h-10 text-indigo-600 bg-white focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">2</button></li>
    <li><button class="px-5 h-10 text-indigo-600 bg-white focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">3</button></li>
    <li><button class="rounded-r-lg px-5 h-10 text-indigo-600 bg-white focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">Next</button></li>
  </ul>
</nav>
`

const paginationBorderedCode = `
<nav aria-label="Page navigation">
  <ul class="inline-flex">
    <li><button class="rounded-l-lg px-5 h-10 text-indigo-600 bg-white border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">Prev</button></li>
    <li><button class="px-5 h-10 text-indigo-600 bg-white border border-r-0 border-indigo-600 focus:shadow-outline transition-colors duration-150">1</button></li>
    <li><button class="px-5 h-10 text-indigo-600 bg-white border border-r-0 border-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">2</button></li>
    <li><button class="px-5 h-10 text-white bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline transition-colors duration-150">3</button></li>
    <li><button class="rounded-r-lg px-5 h-10 text-indigo-600 bg-white border border-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">Next</button></li>
  </ul>
</nav>
`

const paginationIconsCode = `
<nav aria-label="Page navigation">
  <ul class="inline-flex">
    <li><button class="rounded-l-lg px-5 h-10 text-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
    </li>
    <li><button class="px-5 h-10 text-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">1</button></li>
    <li><button class="px-5 h-10 text-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">2</button></li>
    <li><button class="px-5 h-10 text-white bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline transition-colors duration-150">3</button></li>
    <li><button class="rounded-r-lg px-5 h-10 text-indigo-600 bg-white focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
    </li>
  </ul>
</nav>
`

const paginationRoundedCode = `
<nav aria-label="Page navigation">
  <ul class="inline-flex space-x-2">
    <li><button class="flex justify-center items-center rounded-full w-10 h-10 text-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
    </li>
    <li><button class="rounded-full w-10 h-10 text-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">1</button></li>
    <li><button class="rounded-full w-10 h-10 text-indigo-600 focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">2</button></li>
    <li><button class="rounded-full w-10 h-10 text-white bg-indigo-600 border border-r-0 border-indigo-600 focus:shadow-outline transition-colors duration-150">3</button></li>
    <li><button class="flex justify-center items-center rounded-full w-10 h-10 text-indigo-600 bg-white focus:shadow-outline hover:bg-indigo-100 transition-colors duration-150">
      <svg class="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" fill-rule="evenodd"></path></svg></button>
    </li>
  </ul>
</nav>
`

function Pagination() {
  return (
    <Layout>
      <SEO title="Pagination" url="docs/pagination" />

      <H2>Pagination</H2>
      <Lead>Pagination components using Tailwind CSS to speed up your project.</Lead>
      <hr className="my-8" />

      <ExampleSection id="pagination-button">
        <H4>Button pagination</H4>
        <P>
          Paged navigation with buttons. It uses <code>li</code>s so screen readers can tell the
          number of options. You can use the same buttons from{' '}
          <Link href="/docs/buttons#button-group">
            <a className="font-bold underline hover:text-gray-600">button groups</a>
          </Link>
          .
        </P>
        <CodeCard lang="html" code={paginationButtonCode} />
      </ExampleSection>

      <ExampleSection id="pagination-borderedButton">
        <H4>Bordered pagination</H4>
        <P>Paged navigation with bordered buttons.</P>
        <CodeCard lang="html" code={paginationBorderedCode} />
      </ExampleSection>

      <ExampleSection id="pagination-icons">
        <H4>Pagination with icons</H4>
        <P>Paged navigation with icons.</P>
        <CodeCard lang="html" code={paginationIconsCode} />
      </ExampleSection>

      <ExampleSection id="pagination-rounded">
        <H4>Round buttons pagination</H4>
        <P>Paged navigation with rounded buttons.</P>
        <CodeCard lang="html" code={paginationRoundedCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Pagination
