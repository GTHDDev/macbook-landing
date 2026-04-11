import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettierConfig from 'eslint-config-prettier'

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	{
		rules: {
			'no-unexpected-multiline': 'error',
			'react/no-unknown-property': [
				'error',
				{
					ignore: [
						'position',
						'rotation',
						'scale',
						'args',
						'intensity',
						'attach',
						'geometry',
						'material',
						'castShadow',
						'receiveShadow'
					]
				}
			],
			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/aria-proptypes': 'error',
			'jsx-a11y/role-has-required-aria-props': 'error'
		}
	},
	prettierConfig,
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
])

export default eslintConfig
