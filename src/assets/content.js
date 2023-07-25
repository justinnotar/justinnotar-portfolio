const header = {
  homepage: '/',
  title: 'notar.dev'
}

const about = {  
  name: 'justin',
  role: 'a full stack software engineer',
  description:
    'innovative and entrepreneurially-minded software engineer specialized in React & Typescript development',
  resume: 'https://drive.google.com/file/d/1pkQqOoq_p3GNd9geor4K4SQ87-VLl4gT/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/justin-notarfrancesco/',
    github: 'https://github.com/justinnotar'
  }
}

const projects = [
  {
    name: 'can my cat eat xyz?',
    class: 'cat',
    description:
      "cat nutrition search engine, powered by OpenAI's gpt-3.5-turbo model",
    // stack: ['html', 'css'],
    sourceCode: 'https://github.com/justinnotar/can-my-cat-eat-xyz-v2',
    livePreview: 'https://can-my-cat-eat-xyz-v2-55578.web.app/',
  },
  {
    name: 'crater clothing',
    class: 'crater',
    description:
      // 'e-commerce clothing brand integrated with Printful and Shopify for print-on-demand servicing',
      'e-commerce clothing brand with print-on-demand Shopify integration',
    // stack: ['html', 'css'],
    sourceCode: 'https://github.com/justinnotar/crater',
    livePreview: 'https://crater-684c7.web.app',
  },
  {
    name: 'opendemia',
    class: 'opendemia',
    description:
      // 'research and writing assistant that generates full works cited and in-text citations for students',
      'citation generator and writing assistant for research students',
    // stack: ['react', 'javascript', 'html', 'css'],
    sourceCode: 'https://github.com/Opendemia',
    livePreview: 'https://www.opendemia.com/',
  }
]

const skills = [
  'React',
  'TypeScript',
  'Cypress',
  'Jest',
  'HTML',
  'CSS',
  'Angular',
  'GraphQL',
  'Storybook',
  'Figma',
  'Java',
  'Python',
]

const contact = {
  email: 'justinnotar@gmail.com'
}

export { header, about, projects, skills, contact }
