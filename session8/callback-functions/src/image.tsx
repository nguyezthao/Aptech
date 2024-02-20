type Props = {
    index?: number;
};

export default function Gallery({ index = 1 }: Props) {
    return (
        <div>
            <img src={`${index}.jpg`} alt='' style={{ width: '100%', height: '80vh', objectFit: 'cover' }} />
        </div>
    );
}