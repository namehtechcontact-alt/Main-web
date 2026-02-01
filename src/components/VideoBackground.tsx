export type VideoBackgroundProps = {
  hasVideo?: boolean;
  videoMp4Src?: string;
  videoWebmSrc?: string;
};

export const VideoBackground = (props: VideoBackgroundProps) => {
  if (!props.hasVideo) {
    return (
      <div className="fixed text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] left-[0%] top-[0%] before:accent-auto before:caret-transparent before:text-black before:table before:text-[15.1297px] before:not-italic before:normal-nums before:font-light before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[-0.302594px] before:leading-[21.1816px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-switzer before:md:text-[15.2873px] before:md:tracking-[-0.305746px] before:md:leading-[21.4022px] after:accent-auto after:caret-transparent after:clear-both after:text-black after:table after:text-[15.1297px] after:not-italic after:normal-nums after:font-light after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[-0.302594px] after:leading-[21.1816px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-switzer after:md:text-[15.2873px] after:md:tracking-[-0.305746px] after:md:leading-[21.4022px]"></div>
    );
  }

  return (
    <div className="fixed text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] z-[-1] inset-[0%] before:absolute before:inset-0 before:bg-black/40 before:z-10">
      <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
        <article className="relative text-white text-[15.1297px] box-border caret-transparent h-[1000px] tracking-[-0.302594px] leading-[21.1816px] max-w-full w-full overflow-hidden md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute text-[15.1297px] bg-[url('https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34%2F6790eb2f5ded350d9d7fa8b1_CreativeGiants_Hero_Showreel-poster-00001.jpg')] bg-cover box-border caret-transparent h-full tracking-[-0.302594px] leading-[21.1816px] object-cover w-full z-[-100] bg-center m-auto -inset-full md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
          >
            {props.videoMp4Src && (
              <source
                src={props.videoMp4Src}
                className="text-black text-base font-normal box-border caret-transparent tracking-[normal] leading-[normal] font-times_new_roman"
              />
            )}
            {props.videoWebmSrc && (
              <source
                src={props.videoWebmSrc}
                className="text-black text-base font-normal box-border caret-transparent tracking-[normal] leading-[normal] font-times_new_roman"
              />
            )}
          </video>
        </article>
      </div>
    </div>
  );
};
