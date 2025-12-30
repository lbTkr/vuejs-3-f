<script setup>

</script>

<template>
    <section id="title">
        <div class="container">
            <div class="detail row">
                <figure class="col-md-6">
                    <img src="./../assets/images/title.png" alt="title">
                </figure>
                <div class="text col-md-6">
                    <h2>Hello,<br>I'm Heejoo</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    #title {
        .container {
            $navbar_height: 56px;
            height: 100vh;
            padding: $navbar_height;

            .row{
                height:100%;
                flex-direction: row-reverse;
            }

            .detail {
                figure {
                    display:grid;
                    place-items:center;
                    img {
                        width: 100%;
                    }
                }
                .text {
                    display:grid;
                    place-items: center;
                    h2 {
                        font-size: 4em;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>