import React from 'react'
import Layout from '../../containers/Layout'
import H2 from '../../components/Headings/H2'
import H4 from '../../components/Headings/H4'
import Lead from '../../components/Text/Lead'
import P from '../../components/Text/P'
import CodeCard from '../../components/CodeCard'
import ExampleSection from '../../components/ExampleSection'
import SEO from '../../components/SEO'

const avatarSizesCode = `
<img class="h-16 w-16 object-cover rounded-full inline mr-2" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
<img class="h-12 w-12 object-cover rounded-full inline mr-2" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
<img class="h-8 w-8 object-cover rounded-full inline" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
`

const avatarGroupCode = `
<div class="-space-x-4">
  <img class="z-30 h-12 w-12 object-cover rounded-full border-2 border-white inline relative" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <img class="z-20 h-12 w-12 object-cover rounded-full border-2 border-white inline relative" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <img class="z-10 h-12 w-12 object-cover rounded-full border-2 border-white inline relative" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
</div>
`

const avatarWithBadgeCode = `
<div class="relative inline-block">
  <img class="h-12 w-12 object-cover rounded-full inline-block" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <span class="absolute bottom-0 right-0 rounded-full h-3 w-3 inline-block bg-green-600 border-2 border-white"></span>
</div>
`

function Avatars() {
  return (
    <Layout>
      <SEO title="Avatars" url="docs/avatars" />

      <H2>Avatars</H2>
      <Lead>Avatar components using Tailwind CSS to speed up your project.</Lead>
      <hr className="my-8" />

      <ExampleSection id="avatar-sizes">
        <H4>Avatar sizes</H4>
        <P>Different sized avatars with inner shadow.</P>
        <CodeCard lang="html" code={avatarSizesCode} />
      </ExampleSection>

      <ExampleSection id="avatar-group">
        <H4>Avatar group</H4>
        <P>Group of stacked avatars with white border.</P>
        <CodeCard lang="html" code={avatarGroupCode} />
      </ExampleSection>

      <ExampleSection id="avatar-badge">
        <H4>Avatar with badge</H4>
        <P>Avatar with status badge.</P>
        <CodeCard lang="html" code={avatarWithBadgeCode} />
      </ExampleSection>
    </Layout>
  )
}

export default Avatars
