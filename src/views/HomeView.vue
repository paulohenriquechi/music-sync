<template>
  <section>
    <div class="container px-4">
        <SectionContainer title="Musicsync Lets You...">
          <div class="row">
            <TextCard title="Track your music" subtitle="BLABLABLABLBABLABLABLBALBABLABLA"/>
            <TextCard title="Track your music" subtitle="BLABLABLABLBABLABLABLBALBABLABLA"/>
            <TextCard title="Track your music" subtitle="BLABLABLABLBABLABLABLBALBABLABLA"/>
            <TextCard title="Track your music" subtitle="BLABLABLABLBABLABLABLBALBABLABLA"/>
            <TextCard title="Track your music" subtitle="BLABLABLABLBABLABLABLBALBABLABLA"/>
            <TextCard title="Track your music" subtitle="BLABLABLABLBABLABLABLBALBABLABLA"/>
          </div>
        </SectionContainer>
        <SectionContainer title="Top Albums">
          <ImageCard v-for="album in albums" :title="album.title" :subtitle="album.artist" :image="album.image" />
        </SectionContainer>
        <SectionContainer title="Top Artists">
          <ImageCard v-for="artist in artists" :title="artist.name" :image="artist.image"/>
        </SectionContainer>
      </div>
  </section>
</template>
<script lang="ts">
import ImageCard from "@/components/ImageCard.vue";
import SectionContainer from "@/components/SectionContainer.vue";
import TextCard from "@/components/TextCard.vue";
export default {
  name: "HomeView",
  components: { ImageCard, SectionContainer, TextCard },
  data() {
    return {
      albums: [
        {
          id: 1,
          title: "Facelift",
          artist: "Alice in Chains",
          image: "facelift.jpg",
        },
        {
          id: 2,
          title: "Sap",
          artist: "Alice in Chains",
          image: "sap.jpg",
        },
        {
          id: 3,
          title: "Dirt",
          artist: "Alice in Chains",
          image: "dirt.jpg",
        },
        {
          id: 4,
          title: "Jar of flies",
          artist: "Alice in Chains",
          image: "jar-of-flies.jpg",
        },
        {
          id: 5,
          title: "Alice in chains",
          artist: "Alice in Chains",
          image: "tripod.jpg",
        },
        {
          id: 6,
          title: "MTV Unplugged",
          artist: "Alice in Chains",
          image: "mtv-unppluged.jpg",
        },
      ],
      artists: [
        {
          id: 1,
          name: "Bladee",
          image: 'bladee.jpg'
        },
        {
          id: 2,
          name: "Bladee",
          image: 'bladee.jpg'
        },
        {
          id: 3,
          name: "Bladee",
          image: 'bladee.jpg'
        },
        {
          id: 4,
          name: "Bladee",
          image: 'bladee.jpg'
        },
        {
          id: 5,
          name: "Bladee",
          image: 'bladee.jpg'
        },
        {
          id: 6,
          name: "Bladee",
          image: 'bladee.jpg'
        },
      ]
    };
  },
};
</script>
