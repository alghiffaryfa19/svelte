<script context="module">
    import Header from '$lib/Header.svelte';
    import LatestVideo from '$lib/LatestVideo.svelte';
    import Level from '$lib/Level.svelte';
    import Service from '$lib/Service.svelte';
    import Event from '$lib/Event.svelte';
    import Announcement from '$lib/Announcement.svelte';
    import Voting from '$lib/Voting.svelte';
    import Quotes from '$lib/Quotes.svelte';
    import Poster from '$lib/Poster.svelte';
    import Video from '$lib/Video.svelte';
    import Gallery from '$lib/Gallery.svelte';
    import Newsletter from '$lib/Newsletter.svelte';
    import Socmed from '$lib/Socmed.svelte';
    import Visitor from '$lib/Visitor.svelte';
    import Footer from '$lib/Footer.svelte';

    export async function load({ fetch }) {
      const [slider, latestVideo, jenjang, service, journey, category, news, topNews, kabar, quotes, poster, video, visitor] = await Promise.all([
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/slider`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/latest-video`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/jenjang`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/service`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/journey`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/event-kategori`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/landing-news`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/top-news`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/kabar-prestasi`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/quote-of-the-day`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/poster`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/video`),
        fetch(`https://pusatprestasinasional.kemdikbud.go.id/labs/api/visitor`),
      ]);
      return {
        props: {
            slider: await slider.json(),
            latestVideo: await latestVideo.json(),
            jenjang: await jenjang.json(),
            service: await service.json(),
            journey: await journey.json(),
            category: await category.json(),
            news: await news.json(),
            topNews: await topNews.json(),
            kabar: await kabar.json(),
            quotes: await quotes.json(),
            poster: await poster.json(),
            video: await video.json(),
            visitor: await visitor.json()
        },
      };
    }
</script>
<script>
    export let slider, latestVideo, jenjang, service, journey, category, news, topNews, kabar, quotes, poster, video, visitor
</script>
<svelte:head>
	<title>Beranda | Pusat Prestasi Nasional</title>
</svelte:head>

<Header {slider}/>
<LatestVideo {latestVideo} />
<Level {jenjang}/>
<Service {service}/>
<Event {journey}{category}{news}{topNews}/>
<Announcement {kabar}/>
<Voting/>
<Quotes {quotes}/>
<Poster {poster}/>
<Video {video}/>
<!-- <Gallery/> -->
<Newsletter/>
<Socmed/>
<Visitor {visitor}/>
<Footer/>
