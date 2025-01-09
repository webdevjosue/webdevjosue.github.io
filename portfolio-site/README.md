# README.md

# Portfolio Site

Welcome to the Portfolio Site of Josue Zazueta. This project is built using Jekyll and GitHub Pages to showcase my work and provide information about my projects and contact details.

## Project Structure

- **_layouts/**: Contains layout files for the site.
  - `default.html`: Main layout for the site.
  - `post.html`: Layout for individual blog posts.
  
- **_includes/**: Contains reusable HTML snippets.
  - `header.html`: Header section of the site.
  - `footer.html`: Footer section with copyright information.
  - `navigation.html`: Navigation menu links.

- **assets/**: Contains static assets.
  - **css/**: Stylesheets for the site.
    - `styles.scss`: SCSS file for styling.
  - **js/**: JavaScript files for functionality.
    - `menu.js`: JavaScript for menu behavior.

- **_posts/**: Contains blog posts in markdown format.
  - `2023-10-01-welcome.md`: Welcome post.

- **pages/**: Contains additional pages.
  - `about.md`: About page for Josue Zazueta.
  - `projects.md`: Projects page detailing my work.
  - `contact.md`: Contact page with my information.

- `_config.yml`: Configuration file for Jekyll.
- `index.html`: Main entry point for the site.
- `Gemfile`: Specifies Ruby gems required for the project.
  
## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required gems by running `bundle install`.
4. Serve the site locally with `bundle exec jekyll serve`.
5. Open your browser and go to `http://localhost:4000` to view the site.

## License

This project is licensed under the MIT License.