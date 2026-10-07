#!/usr/bin/env bash
# Deploy syaheerdaniel.dev. Static files only, so a pull is enough.
set -euo pipefail

main() {
    cd /var/www/portfolio-site
    git pull --ff-only origin main
}

main "$@"
