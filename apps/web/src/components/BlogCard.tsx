import {
    Card,
    CardContent,
    CardHeader
} from '@/components/ui/card';
import { format } from 'date-fns';
import Image from 'next/image';
import { FC } from 'react';
import { Badge } from './ui/badge';

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  author: string;
  imageUrl: string;
  createdAt: Date;
}

const BlogCard: FC<BlogCardProps> = ({
  title,
  author,
  category,
  description,
  imageUrl,
  createdAt,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="relative h-[220px] w-full overflow-hidden rounded-md">
          <Image src={''} alt="Thumbnail" className="object-cover" fill />
        </div>
      </CardHeader>
      <CardContent>
        <Badge variant="outline" className="rounded-sm bg-green-100">
          {category}
        </Badge>
        <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
        <p className="text-sm font-light italic">
          {format(createdAt, 'dd MMMM yyyy')} - {author}
        </p>
        <p className="line-clamp-3 ">{description}</p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
