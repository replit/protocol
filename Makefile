clean:
	rm -f js/index.d.ts js/index.js go/api.pb.go

javascript: clean
	cd js && yarn && yarn publish && make clean

go: clean
	protoc api.proto --go_out=plugin=grpc:./go && \
	git subtree split --prefix=go -b go-release && \
	git push git@github.com:replit/protocol-go.git go-release:master && \
	git branch -D go-release && \
	make clean