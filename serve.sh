#!/bin/sh
# Local preview at http://localhost:4000 (stop with: docker stop volkan-site)
cd "$(dirname "$0")"
docker rm -f volkan-site >/dev/null 2>&1
docker run -d --rm --name volkan-site -u "$(id -u):$(id -g)" -e HOME=/tmp \
  -e BUNDLE_PATH=/srv/site/vendor/bundle -v "$PWD":/srv/site -w /srv/site \
  -p 4000:4000 ruby:3.2 sh -c 'bundle install --quiet && bundle exec jekyll serve --host 0.0.0.0' >/dev/null
echo "Starting... open http://localhost:4000 in a few seconds"
