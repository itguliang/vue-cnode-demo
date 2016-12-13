<template>
    <img class="splash" src="../assets/images/index.png">
</template>
<script>
    export default {
        mounted() {
            setTimeout(() => {
                this.$router.push({
                    name: 'list'
                });
            }, 3000);
        }
    };
</script>
