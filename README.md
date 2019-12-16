# Gatsby Image GraphQL Hyphen Bug Reproduction

This is a minimal reproduction of a bug involving GraphQL queries of .md files using GraphQL.

If the parent node name contains a hyphen, the image path is not converted to a file node and this produces the GraphQL error 'Field "image" must not have a selection since type "String" has no subfields.'

The reproduction is based on the gatsby-starter-netlify-cms template (https://github.com/netlify-templates/gatsby-starter-netlify-cms).
