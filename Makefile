bump-%:
	OLD_VERSION=$$(git tag | sort -r --version-sort | head -n1) && \
	SEMVER_NEW_TAG=$$(bash ./semver.sh bump $(*) $${OLD_VERSION}) && \
	SEMVER_NEW_TAG="v$${SEMVER_NEW_TAG}" && \
	echo "new version: $${SEMVER_NEW_TAG}" && \
	cd js && npm version $${SEMVER_NEW_TAG} && \
	git commit -am "[$(*)] Bump version to $${SEMVER_NEW_TAG}" && \
	git tag $${SEMVER_NEW_TAG}


all: build bump-patch publish
build: build-go build-js
publish: publish-go publish-js

clean-js:
	rm -f js/index.d.ts js/index.js
build-js: clean-js
	cd js && npm install && npm run prepublishOnly
publish-js:
	cd js && npm publish


clean-go:
	rm -rf go/api.pb.go
build-go: clean-go
	protoc api.proto --go_out=./go
publish-go:
	VERSION=$$(git tag | sort -r --version-sort | head -n1) && \
	git subtree split --prefix=go -b go-release && \
	git push git@github.com:replit/protocol-go.git go-release:master && \
	git push git@github.com:replit/protocol-go.git HEAD:refs/tags/$${VERSION} && \
	git branch -D go-release
