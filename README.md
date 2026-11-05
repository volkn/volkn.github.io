# Volkan Ün — personal website

Built on the [Minimal Light](https://github.com/yaoyao-liu/minimal-light) Jekyll theme (MIT).

- Homepage text: `index.md`, `_includes/experience.md`
- Publications: `_data/publications.yml`
- Paper detail pages: `papers/*.html` (plain HTML, styled by `assets/css/paper.css`)
- Profile photo: put it at `assets/img/avatar.jpg` and uncomment `avatar:` in `_config.yml`
- Award photo: `assets/img/award.jpg` (shown on the ISOCC paper page)

## Local preview (Docker)

    docker run --rm -it -u $(id -u):$(id -g) -e HOME=/tmp -e BUNDLE_PATH=/srv/site/vendor/bundle \
      -v "$PWD":/srv/site -w /srv/site -p 4000:4000 ruby:3.2 \
      sh -c 'bundle install && bundle exec jekyll serve --host 0.0.0.0'

Then open http://localhost:4000.
