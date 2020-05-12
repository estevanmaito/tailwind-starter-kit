import React from 'react'
import Layout from '../../containers/Layout'
import H2 from '../../components/Headings/H2'
import H4 from '../../components/Headings/H4'
import Lead from '../../components/Text/Lead'
import P from '../../components/Text/P'
import CodeCard from '../../components/CodeCard'
import ExampleSection from '../../components/ExampleSection'
import SEO from '../../components/SEO'

const breadcrumbsCode = `
<nav aria-label="breadcrumb">
  <ol class="flex divide-x divide-indigo-400 text-indigo-600 leading-none">
    <li class="pr-4"><a href="#">Home</a></li>
    <li class="px-4 text-gray-700" aria-current="page">Blog</li>
  </ol>
</nav>

<nav class="mt-8" aria-label="breadcrumb">
  <ol class="flex divide-x divide-indigo-400 text-indigo-600 leading-none">
    <li class="pr-4"><a href="#">Home</a></li>
    <li class="px-4"><a href="#">Blog</a></li>
    <li class="px-4 text-gray-700" aria-current="page">This week</li>
  </ol>
</nav>
`

function Breadcrumbs() {
  return (
    <Layout>
      <SEO title="Breadcrumbs" url="docs/breadcrumbs" />

      <H2>Breadcrumbs</H2>
      <Lead>Breadcrumb components using Tailwind CSS to speed up your project.</Lead>
      <hr className="my-8" />

      <ExampleSection id="breadcrumbs">
        <H4>Simple breadcrumb</H4>
        <P>Simple breadcrumb using Tailwind dividers.</P>
        <CodeCard lang="html" code={breadcrumbsCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Breadcrumbs
