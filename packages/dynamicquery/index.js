import dynamicquery from './src/main.vue'

dynamicquery.install = function(vue) {
	vue.component(dynamicquery.name, dynamicquery)
}

export default dynamicquery
