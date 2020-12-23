bump-%:
	OLD_VERSION=$$(git tag | sort -r --version-sort | head -n1) && \
	SEMVER_NEW_TAG=$$(bash ./semver.sh bump $(*) $${OLD_VERSION}) && \
	SEMVER_NEW_TAG="v$${SEMVER_NEW_TAG}" && \
	echo "new version: $${SEMVER_NEW_TAG}" && \
	cd js && npm version $${SEMVER_NEW_TAG} && \
	git add . && \
	git commit -am "[$(*)] Bump version to $${SEMVER_NEW_TAG}" && \
	git tag $${SEMVER_NEW_TAG}


all: build bump-patch publish
build: build-go build-js
publish: publish-go publish-js

clean-js:
	rm -f js/index.d.ts js/index.js js/export.flow.js
build-js: clean-js
	cd js && npm install && npm run prepublishOnly
publish-js:
	cd js && npm publish


clean-go:
	rm -rf go/api.pb.go go/client.pb.go
build-go: clean-go
	protoc api.proto client.proto --go_out=./go
publish-go: .git/refs/remotes/protocol-go/master
	git fetch protocol-go master && \
	VERSION="$$(git describe --tags)" && \
	COMMIT="$$(git show --no-patch --format=%B "$${VERSION}" | git commit-tree "$${VERSION}:go/" -p FETCH_HEAD)" && \
	git push protocol-go "$${COMMIT}:master" "$${COMMIT}:refs/tags/$${VERSION}"
.git/refs/remotes/protocol-go/master:
	git remote add -f protocol-go git@github.com:replit/protocol-go.git
	git fetch protocol-go master
