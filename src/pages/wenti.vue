<template>
    <div>
        <Head title="二手车常见问题回答"></Head>
        <Changjianwenti></Changjianwenti>
    </div>
</template>
<script>

const Head = () => import("../components/head/head")
const Changjianwenti = () => import("../components/changjianwenti/changjianwenti")

export default {
    components:{
       Head,
       Changjianwenti
    },
    
}
</script>
<style scoped>
</style>